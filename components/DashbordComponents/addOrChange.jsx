"use client"
import React, { useState } from 'react'
import axios from "axios";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    name: z.string().min(3, {
      message: "Nazwa Oferty musi być co najmniej 3 literowa",
    }),
    price: z.coerce.number().min(1, {
        message: "cenma musi być powyżej 0",
      }),
      discountPerMonth: z.coerce.number({
        required_error: "Pole jest wymagane"
      }),
      coupleDiscount: z.coerce.number({
        required_error: "Pole jest wymagane"
      }),
      discountPerYear: z.coerce.number({
        required_error: "Pole jest wymagane"
      }),
  })
 
 
const AddOrChange = (props) => {
const {name , object} = props 
const [loading, setLoading] = useState(false);
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        price: 0,
        discountPerMonth: 0,
        coupleDiscount : 0,
        discountPerYear: 0

    },
  }); 
  const  onSubmit = async (values) => { 
    try {
      setLoading(true)
      const response = await axios.post("/api/oferta", values);
    }catch(e){
      console.log(e);
    } finally{
      setLoading(false)
    }
  }
  return (
    <>
    {name === "Oferty" &&  object === null ? (
    <Dialog>
     <DialogTrigger className='bg-black rounded-lg text-center flex justify-center items-center flex-row text-white text-lg p-2 font-bold'>Dodaj <Plus/></DialogTrigger>
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Dodaj Ofertę</DialogTitle>
      <DialogDescription>
     
       
      </DialogDescription>
    </DialogHeader> <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa Oferty</FormLabel>
              <FormControl>
                <Input placeholder="Oferta dla Mężczyzn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
             )}
        />
         <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cena Oferty</FormLabel>
              <FormControl>
                <Input 
                 type="number"
                 placeholder="100" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
          <FormField
          control={form.control}
          name="discountPerMonth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Przecena na Miesiąc  w %</FormLabel>
              <FormControl>
                <Input 
                 type="number"
                 placeholder="10" {...field} />
              </FormControl>
              <FormDescription>
              Cena  wliczając  przecene miesiączną : { form.getValues("price") - (form.getValues("price") * form.getValues("discountPerMonth") / 100)}
        
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
          <FormField
          control={form.control}
          name="discountPerYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Przecena za Rok w %</FormLabel>
              <FormControl>
                <Input 
                 type="number"
                 placeholder="10" {...field} />
              </FormControl>
              <FormDescription>
              Cena  wliczając  przecene roczną :     { form.getValues("price") - (form.getValues("price") * form.getValues("discountPerYear") / 100) }
            
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
          <FormField
          control={form.control}
          name="coupleDiscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Przecena dla Par w % </FormLabel>
              <FormControl>
                <Input 
                 type="number"
                 placeholder="10" {...field} />
              </FormControl>
              <FormDescription className=""> 
                Cena  wliczając tylko przecene grupową : { form.getValues("price") - (form.getValues("price") * form.getValues("coupleDiscount") / 100) }
                <br></br>
                Cena  wliczając  przecene miesiączną :   { form.getValues("price") - (form.getValues("price") * form.getValues("discountPerMonth") / 100) - (form.getValues("price") * form.getValues("coupleDiscount") / 100)   }
                <br></br>
                Cena  wliczając  przecene roczną :   { form.getValues("price") - (form.getValues("price") * form.getValues("discountPerYear") / 100) - (form.getValues("price") * form.getValues("coupleDiscount") / 100)}
                   </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Dodaj</Button>
      </form>
    </Form>
  </DialogContent>
</Dialog>) : <></>}
    
    </>
  )
}

export default AddOrChange