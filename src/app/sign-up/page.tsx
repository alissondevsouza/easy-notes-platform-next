import SignUpForm from '@/app/sign-up/_components/sign-form';
import SignUp from '@/assets/SignUp.jpg';
import Logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';

export default function SignUpPage() {
    return (
        <main className="flex min-h-screen flex-row items-center justify-center">
            <div className="w-full relative h-[42rem] max-w-md backdrop-blur-sm bg-white/10 rounded-l-xl border text-card-foreground shadow flex flex-col justify-center items-center p-6">
                <div className="absolute -z-10 w-full h-full flex justify-center items-center blur-sm">
                    <Image
                        className="rounded-l-xl h-[41.5rem] w-[98.5%] object-cover"
                        src={SignUp}
                        alt="background image"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="w-full text-left">
                    <Link href={'/'}>
                        <div className="flex flex-row gap-1">
                            <GoArrowLeft className="text-2xl font-bold" />
                            <span className="font-bold">Voltar</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-end items-center h-[50%]">
                    <Image
                        src={Logo}
                        alt="logo ENP - Easy Notes Platform"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="flex flex-col justify-end items-center h-[50%]">
                    <span className="font-bold text-2xl"> Crie Sua Conta</span>
                    <span className="font-bold text-2xl"> É Gratis !</span>
                    <p className="mt-8 text-center">
                        Gerencie e Consulte sua anotações de onde estiver
                    </p>
                </div>
            </div>

            <div className="h-[42rem] p-8 w-full max-w-md rounded-r-xl border text-card-foreground shadow backdrop-blur-sm bg-white/5">
                <div className=" h-full flex justify-center flex-col">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="text-2xl font-bold mb-2">Cadastrar</h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Digite seus dados para criar conta
                        </p>
                    </div>

                    <SignUpForm />

                    <div className="mt-6 text-center">
                        <p className="text-sm">Já possui conta?</p>

                        <Link href={'/login'}>
                            <Button className="w-auto mt-2">
                                Entre com sua Conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
