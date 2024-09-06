import Profile from "./(modules)/home/_components/profile";
import { Content } from "./(modules)/home/_components/content";
import { BottomNav } from "./(modules)/home/_components/bottomNav";

export default function Home() {
    return (
        <main  >
            <div className="block sm:block md:flex md:gap-10 lg:flex lg:gap-10 ">
                <div className=" w-[100%] md:w-[30%] lg:w-[30%]  lg:sticky lg:top-10">
                    <Profile />

                </div>
                <div className='w-full md:w-[70%] lg:w-[70%] h-[calc(100vh-50px)]  md:overflow-auto scrollable-content
                lg:overflow-auto'>

                    <Content />


                </div>
            </div>
            <BottomNav/>
        </main>


    );
}
