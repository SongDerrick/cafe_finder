import '@styles/globals.css';

import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
    title: "카페 탐색기",
    description: "Discover and Share Cafes"
}

// this layout will wrap every routes in this project
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout