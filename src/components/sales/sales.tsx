"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

type Question = {
  id: string;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "total-monthly-sales",
    question: "What was the total sales revenue generated in the month of [Month]?",
    options: ["$10,000 - $15,000", "$15,000 - $20,000", "$20,000 - $25,000", "$25,000+"]
  },
  {
    id: "top-selling-product",
    question: "Which product category generated the highest revenue in the past quarter?",
    options: ["Electronics", "Clothing", "Home Goods", "Beauty Products"]
  },
  {
    id: "sales-channel-performance",
    question: "Which sales channel contributed the most to overall sales in the last fiscal year?",
    options: ["Online Store", "Physical Stores", "Phone Sales", "Social Media Sales"]
  },
  {
    id: "marketing-campaign-effectiveness",
    question: "Which marketing campaign had the highest conversion rate in the past month?",
    options: ["Email Campaign", "Social Media Campaign", "TV Ad Campaign", "Influencer Marketing Campaign"]
  },
  {
    id: "customer-acquisition-cost",
    question: "What was the average cost to acquire a new customer in the last quarter?",
    options: ["$50 - $75", "$75 - $100", "$100 - $125", "$125+"]
  },
  {
    id: "customer-lifetime-value",
    question: "How much revenue, on average, does a customer generate over their lifetime?",
    options: ["$200 - $300", "$300 - $400", "$400 - $500", "$500+"]
  }
]

export default function SurveySlider() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = async () => {
    setIsGenerating(true)
    console.log(answers)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    router.push('/dashboard')
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      api?.scrollNext()
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      api?.scrollPrev()
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const allQuestionsAnswered = Object.keys(answers).length === questions.length

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50/50">
      {isGenerating ? (
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-12 w-12">
              <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            </div>
            <p className="text-lg font-medium text-gray-900">Generating your report...</p>
            <p className="text-sm text-gray-500">Please wait while we analyze your responses</p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sales & Marketing Report Generator
            </h1>
            <p className="text-gray-600 mb-6">
              Answer these questions to generate your personalized business analysis report
            </p>
            <div className="inline-block bg-blue-50 rounded-full border px-4 py-1">
              <p className="text-sm text-blue-600 font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10">
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10">
              <Button 
                variant="outline" 
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Carousel 
              setApi={setApi}
              className="w-full"
              opts={{
                align: 'start',
                loop: false,
              }}
            >
              <CarouselContent>
                {questions.map((q, index) => (
                  <CarouselItem key={q.id}>
                    <Card className="border-blue-100">
                      <CardHeader>
                        <CardTitle className="text-center">{q.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup
                          onValueChange={(value: string) => handleAnswer(q.id, value)}
                          value={answers[q.id]}
                          className="space-y-4"
                        >
                          {q.options.map((option, optionIndex) => (
                            <div 
                              key={optionIndex} 
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <RadioGroupItem value={option} id={`${q.id}-${optionIndex}`} />
                              <Label htmlFor={`${q.id}-${optionIndex}`} className="flex-1 cursor-pointer">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {isLastQuestion && (
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={handleSubmit} 
                disabled={!allQuestionsAnswered || isGenerating}
                className="px-8 bg-blue-600 hover:bg-blue-700"
              >
                Generate Report
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}