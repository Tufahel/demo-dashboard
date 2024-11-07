"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "@/components/dashboard/search";
import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/dashboard/user-nav";
import allservices from "@/data/allservices.json";
import { Plus } from "lucide-react";

export default function Services() {
  const services = allservices;

  return (
    <div className="px-8 py-4">
      <div className="flex flex-row">
        <div className="ml-auto flex flex-row items-center space-x-4">
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-4">
        <h1 className="text-2xl font-bold sticky top-4">Our Services</h1>
        <Button variant="secondary" className="flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Service</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <CardTitle>{service.name}</CardTitle>
                <Badge variant="secondary">{service.category}</Badge>
              </div>
              <p className="text-2xl font-bold mb-2">${service.price}</p>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter className="flex space-x-2">
              <Button variant="outline" size="sm">
                Edit Cost
              </Button>
              <Button variant="outline" size="sm">
                Add Offer
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
