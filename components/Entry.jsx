import Image from 'next/image'
import { useState } from 'react'

export default function Entry() {
    const [isExp, setExp] = useState(true)
    return (
        <div className={(isExp ? "w-[400px] h-[400px]" : "w-info h-info -order-1") + ' flex m-16 bg-slate-200 rounded-2xl border-blue-300 border-2 drop-shadow-2xl transition-all ease-in-out duration-500'} onClick={() => {setExp(!isExp);document.getElementById("right").scrollTop;}
        }>
            <div className='p-8 w-full'>
                
                <div className='transition-all flex flex-row justify-between h-fit w-full items-center'>
                    <Image src="/favicon.ico" alt="Logo" width={isExp ? 80 : 120} height={isExp ? 80 : 120} className="transition-all"/>
                    <div className={(isExp ? "text-xl flex-col" : "flex-row justify-center gap-8") + ' flex  grow items-center'}>
                    <div className={(isExp ? "text-xl" : "text-5xl h-5/6 text-scroll") + " transition-allw-fit font-bold"}></div>
                    <div className={(isExp ? "text-md" : "text-2xl") + ' flex flex-row gap-4 justify-center'}><p className='bg-green-300 p-2 rounded-xl font-bold'>KYC</p>
                    <p className='bg-pink-300 p-2 rounded-xl font-bold'>SAFE</p></div>
                    </div>
                </div>
                <div className={(isExp ? "h-64 pt-8" : "h-5/6 text-scroll pt-8") + " transition-all"}>
                    <p className={(isExp ? "text-xl" : "text-3xl overflow-y-scroll") + ' h-full text-ellipsis overflow-hidden transition-all'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu mauris, pellentesque eget mi id, ullamcorper lobortis nisi. Proin vitae urna vitae metus tristique tempus. Duis scelerisque, ex id pulvinar tincidunt, eros magna aliquam lectus, nec porttitor mauris nulla sed lorem. In ac libero ullamcorper, hendrerit risus eu, viverra dui. Curabitur convallis luctus massa sed semper. Mauris ipsum felis, rutrum eu sodales sit amet, tincidunt mollis purus. Pellentesque lacus mauris, venenatis vehicula ultrices quis, sollicitudin ac ex.

Nam laoreet suscipit erat, a gravida nisi facilisis at. Praesent efficitur est non magna viverra, at finibus purus blandit. Fusce finibus leo ultricies porttitor tempor. Phasellus est ligula, dapibus nec enim non, varius interdum sem. Sed vel lorem ipsum. Integer venenatis sollicitudin vehicula. Morbi rhoncus dui et luctus laoreet.

Nulla quis posuere odio, vitae maximus sapien. Mauris non fringilla enim, nec rutrum nibh. Aenean in augue et nisi eleifend rhoncus in ut orci. Donec vitae nisl a lacus molestie porta. Proin neque dolor, rutrum sed maximus eu, sollicitudin non eros. Nam bibendum euismod ipsum, vel lacinia justo luctus efficitur. Phasellus elit augue, sagittis at consectetur et, laoreet a mauris. Maecenas porttitor pellentesque porttitor. Ut vel luctus libero, a tempor lorem. Sed dignissim elementum nisl, gravida bibendum lacus ultrices ac. Nam vel metus pulvinar, ornare ante a, tincidunt felis. Aliquam sed sem tincidunt, lacinia lacus et, mollis leo.

Integer non mauris fringilla, tincidunt nunc quis, vestibulum nibh. Maecenas ac volutpat nisi. In maximus ex quam, at mollis felis tempor sit amet. Vestibulum vitae nulla at orci molestie malesuada. Morbi dictum, augue molestie vehicula ornare, turpis sem rutrum purus, non pellentesque libero tellus nec risus. Nullam in nisl mattis, feugiat risus sed, tempus ante. Sed sagittis faucibus semper. Nulla eget tellus nec nisi laoreet aliquam ut et ante. Etiam quis vestibulum libero, a gravida dui. Aliquam rhoncus libero eu nisi congue, sit amet consequat magna porttitor. Aenean leo erat, pellentesque ut fermentum quis, mollis et lectus. Pellentesque massa turpis, elementum at dapibus a, vestibulum ac nunc.
                    </p>
                </div>
            </div>
        </div>
    )
}
