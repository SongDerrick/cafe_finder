import React from 'react'
import Link from 'next/link'

const Form = ({
  type,
  post,
  cafe,
  setPost,
  submitting,
  handleSubmit,
  handleSearch
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type}</span>
      </h1>
      <p className='desc text-left max-w-md'>
        방문한 카페에 대해 후기를 남겨주시고, <br /> 그 카페를 설명하기 적합한 태그 세 가지를 골라서 작성해주세요!
      </p>
      

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            카페 고르기
          </span>
          <input 
            value={post.cafe_name}
            // onChange={(event) => setPost({ ...post, cafe_name: event.target.value })}
            placeholder='카페를 검색하세요'
            required
            className='form_input'
          />

          <div className='flex-end mx-3 mt-5 gap-4'>

            <button
                type='button'
                onClick={handleSearch}
                className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            >
                검색하기
            </button>
          </div>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            후기
          </span>
          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value})}
            placeholder='후기를 이곳에 작성해주세요'
            required
            className='form_textarea'
          />

        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            태그 {` `}
            <span className='font-normal'>
              (#분위기좋은, #커피가맛있는, #디저트가맛있는, #조용한)
            </span>
          </span>
          <input 
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value})}
            placeholder='#tag'
            required
            className='form_input'
          />

        </label>
        
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `저장 중...` : '저장하기'}
          </button>
        </div>

      </form>
    </section>
  )
}

export default Form