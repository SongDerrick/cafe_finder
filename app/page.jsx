import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
            {/* underscores are globals.css */}
            <br/>
            <span className="orange_gradient text-center"> 새로운 카페 </span>
        </h1> 
        <p className="desc text-center">
          실시간으로 업데이트되는 정보를 통해 <span className="orange_gradient" >취향 저격 카페</span>와 <span className="pink_gradient">후기</span>들.
          <br/> 
          매일매일 색다른 카페를 발견하고, 최고의 디저트 경험을 즐겨보세요.
        </p>
        <Feed />
    </section>
  )
}

export default Home