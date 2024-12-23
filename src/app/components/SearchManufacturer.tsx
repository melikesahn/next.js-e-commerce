"use client";
import Image from 'next/image';
import { useState,Fragment } from 'react';
import { Combobox,ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '../types'
import { manufacturers } from '../../../constants';

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers=query===""
    ? manufacturers
    :manufacturers.filter((item)=>(
        item.toLowerCase()
        .replace(/\s+/g,"")
        .includes( query.toLowerCase().replace(/\s+/g,"") )

    ))
  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>

        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image src="/images/icons-home2.svg"
                    width={25}
                    height={25}
                    className='ml-4'
                    alt='home logo'
                    />
                    
                </ComboboxButton>
                <ComboboxInput 
                className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                placeholder='oda türü'
                displayValue={(manufacturer:string)=>manufacturer}
                onChange={ (e) => setQuery(e.target.value)}
                >

                </ComboboxInput>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={ () => setQuery('') }
                >
                    <ComboboxOptions>
                    {filteredManufacturers.map((item) => (
                            <ComboboxOption
                            key={item}
                            className={({active})=>`
                            realtive cursor-default select-none py-2 pl-10 pr-4
                            ${active ? 'bg-purple-700 text-white' : 'text-gray-900'}
                            `}
                            value={item}
                            >
                            {({selected,active})=>(
                                <>
                                 <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            
                          </span>
                        ) : null}
                                </>
                            )}
                            </ComboboxOption>
                        )
                    )}
                    </ComboboxOptions>

                </Transition>

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer