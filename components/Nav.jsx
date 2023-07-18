"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react' // we are using hooks -> need client side rendering
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {

    const { data: session } = useSession(); // user session

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () =>{
            const response = await getProviders();
            setProviders(response)
        }

        setUpProviders();
    }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'> 
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src="/assets/images/logo.png" alt="Promptopia Logo"
                width={40}
                height={40}
                className='object-contain'
            />
            <p className='logo_text'>카페를 찾아보아요 ㄹㅇ로다가</p>
        </Link>
        
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 mid:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>
                        새로운 후기 작성
                    </Link>
                    <button type='button' onClick={signOut} className='outline_btn'>
                        로그아웃
                    </button>
                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                        />
                    </Link>
                </div>
            ) : (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button
                            type = "button"
                            key = {provider.name}
                            onClick={()=>signIn(provider.id)}
                            className='black_btn'
                        >
                            로그인
                        </button>
                    ))}
                </>
            )}

        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image 
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={()=>setToggleDropdown((prev) =>!prev)} // change current value
                    />
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link
                                href="/profile"    
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                            >
                                마이 페이지
                            </Link>
                            <Link
                                href="/create-prompt"    
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                            >
                                새로운 후기 작성
                            </Link>
                            <button
                                type='button'
                                onClick={()=>{
                                    setToggleDropdown(false)
                                    signOut()
                                }}
                                className='mt-5 w-full black_btn'
                            >
                                로그아웃
                            </button>

                        </div>
                    )}
                </div>
            ) : (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button
                            type = "button"
                            key = {provider.name}
                            onClick={()=>signIn(provider.id)}
                            className='black_btn'
                        >
                            로그인
                        </button>
                    ))}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav