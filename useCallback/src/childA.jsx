import { React,memo } from 'react'

const ChildA = ({initialUpdate, dependencyUpdate}) => {

    console.log('i am somnath');

    function abcd(){
        console.log('Hi i am a web developer!');
    }

  return (
    <>
    {abcd()}
    </>
  )
}

export default memo(ChildA)