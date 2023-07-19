"use client";

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form'

const EditPrompt = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')

    const [submitting, setIsSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
        cafe_name:'',
        cafe_location:'',
        location:''
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
                cafe_name: data.cafe_name,
                cafe_location: data.cafe_location,
                location: data.location
            })
        }

        if(promptId) getPromptDetails()
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault(); // prevent browser default actions
        setIsSubmitting(true);

        if(!promptId) return alert('Prompt Id Not found')

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    cafe_name: post.cafe_name,
                    cafe_location: post.cafe_location,
                    location: post.location
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
        type="기존 후기 수정하기"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt