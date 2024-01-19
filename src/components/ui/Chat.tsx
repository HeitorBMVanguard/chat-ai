'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { useChat } from 'ai/react';
import { ScrollArea } from '@/components/ui/scroll-area';



export default function Chat(){

    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return(
       
    <Card className='w-[448px]  '>
        <CardHeader>
          <CardTitle> Chat AI</CardTitle>
          <CardDescription> Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent >
          <ScrollArea className='h-[648px] w-full  pr-4'>
            {messages.map(message => {
                return(
                <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4'>
                   {message.role === 'user' && (
                     <Avatar>
                     <AvatarFallback>DF</AvatarFallback>
                     <AvatarImage src='https://github.com/HeitorBMarini.png'/>
                     </Avatar>
                   )}

                    {message.role === 'assistant' && (
                    
                     <Avatar>
                       <AvatarFallback>RS</AvatarFallback>
                       <AvatarImage src='https://imgstore.adapt.ws/goatchat/web/logo.png'/>
                     </Avatar>
                     
                   )}

                    <p className='leading-relaxed'> 
                    <span className='block font-bold text-slate-700'>{message.role === 'user' ? 'Usuário' : 'AI'}</span>
                   {message.content}
                    </p>
                </div>
                
                )
            }
            
                )}
          </ScrollArea>

            

        </CardContent>

        <CardFooter >
            <form className='w-full gap-2 flex' onSubmit={handleSubmit}>
            <Input placeholder='How can i help you?' value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
            </form>
          
          
        </CardFooter>
      </Card>
       
    )
}