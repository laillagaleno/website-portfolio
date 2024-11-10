import { Ubuntu, Outfit} from 'next/font/google'

export const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu'
})

export const outfit = Outfit({
    weight: ['100', '200', '300', '400', '500','600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-outfit'
})
