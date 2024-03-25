import Profile from "./(modules)/home/_components/profile";
import { Content } from "./(modules)/home/_components/content";

export default function Home() {
    return (
        <main  >
            <div className="block sm:block md:flex md:gap-10 lg:flex lg:gap-10 ">
                <div className=" w-[100%] md:w-[30%] lg:w-[30%]">
                    <Profile />

                </div>
                <div className='w-[100%] md:w-[71%] lg:w-[71%]    '>
                    {/* <div className="h-50 "> */}
                    <Content />
                    {/* </div> */}
                </div>
            </div>

        </main>


    );
}
