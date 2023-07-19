"use client";

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Form from '@components/Form'

const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setIsSubmitting] = useState(false)
    const [cafes, setCafes] = useState([])
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault(); // prevent browser default actions
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if(response.ok){
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false);
        }


    }
  return (
    <Form
        type="새 후기 작성하기"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt