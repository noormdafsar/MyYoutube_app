import React from 'react'

const commentsData = [
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[
            {
                name: "Nooruddin Md Afsar",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies:[
                    {
                        name: "Nooruddin Md Afsar",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies:[
                            {
                                name: "Nooruddin Md Afsar",
                                text: "lorem ipsum dolor sit amet, consectetur adip",
                                replies:[],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[
            {
                name: "Nooruddin Md Afsar",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies:[],
            },
        ],
    },
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[],
    },
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[],
    },
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[],
    },
    {
        name: "Nooruddin Md Afsar",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies:[],
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex'>
            <img 
            className='w-12 h-12'
            alt='user'
            src='./src/assets/userLogin.png'  
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
               
            </div>
        </div>
        
    )
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>comments:</h1>
      <Comment data={commentsData[0]} />
    </div>
  )
}

export default CommentsContainer;
