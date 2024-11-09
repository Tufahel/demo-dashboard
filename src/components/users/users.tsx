"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { Search } from "@/components/search/search";
import { UserNav } from "@/layouts/nav/user-nav";
import { Layout } from "../../layouts/layout";
import mockUsers from "@/data/mockUsers.json";
import ThemeSwitch from "@/components/theme-switch";

type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: Date | string;
  jobApplications: number;
  country?: string;
};

export default function UserList() {
  const [users] = useState<User[]>(
    mockUsers.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt),
    }))
  );

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <Search />
        <div className="ml-auto flex items-center pl-8 pr-4">
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>
      <main className="px-4 sm:px-8 overflow-x-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">User List</h1>
        <div className="min-w-full overflow-hidden">
          {/* Mobile View: Card Layout */}
          <div className="block sm:hidden space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                    <div>
                      <div className="text-gray-500">Country</div>
                      <div>{user.country || "-"}</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-gray-500">Created</div>
                    <div>
                      {formatDistanceToNow(
                        typeof user.createdAt === "string"
                          ? new Date(user.createdAt)
                          : user.createdAt,
                        { addSuffix: true }
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Applications</div>
                    <Badge variant="secondary">{user.jobApplications}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table Layout */}
          <div className="hidden sm:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Country
                  </TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Account Created
                  </TableHead>
                  <TableHead>Applications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {user.email}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {user.country || "-"}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {formatDistanceToNow(
                        typeof user.createdAt === "string"
                          ? new Date(user.createdAt)
                          : user.createdAt,
                        { addSuffix: true }
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{user.jobApplications}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </Layout>
  );
}
