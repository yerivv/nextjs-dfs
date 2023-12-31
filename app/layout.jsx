
import '@/app/styles/style.scss'
import SkipNavigation from '@/app/component/layout/SkipNavigation';
import BasicHeader from '@/app/component/layout/BasicHeader';
import BasicFooter from '@/app/component/layout/BasicFooter';

export const metadata = {
  title: {
    default: "김김",
    template: "",
  },
  description: "그냥 나 혼자 하는 거",
  icons: {
    icon: "/favicon.ico",
  },
}

//https://xionwcfm.tistory.com/339
//확인 : https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <SkipNavigation />
        <div id="wrap">
          <BasicHeader />
          <main id="main-content" tabIndex="-1">
            <div className="contents">{children}</div>
          </main>
          <BasicFooter />
        </div>
      </body>
    </html>
  )
}
