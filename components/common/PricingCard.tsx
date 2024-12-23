import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import { Button } from '../ui/button';



const PricingCard = ({ tier, index }: {
  tier: {
    name: string;
    price: string;
    features: string[];
  };
  index: number;
}) => {
  return (
    <Card key={index} className={index === 1 ? "border-primary" : ""}>
      <CardHeader>
        <CardTitle className='text-2xl'>{tier.name}</CardTitle>
        <CardDescription className='text-3xl font-bold'>
          {tier.price}
          <span className='text-base font-normal'>
            /month
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {
            tier.features.map((feature, fIndex) => (
              <li key={fIndex} className='flex items-center'>
               <CheckIcon className='h-5 w-5 text-primary mr-2' />
                {feature}
              </li>
            ))
          }
        </ul>
      </CardContent>
      <CardFooter>
        <Button className='w-full'
          variant={index === 1 ? 'default' : 'outline'}        
        >{
            index === 0 ? "Get Started" : "Upgrade To Pro"
        }
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PricingCard