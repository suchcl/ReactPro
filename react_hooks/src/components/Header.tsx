import React,{memo,useState} from 'react';

interface IProps{
    name?:string,
    message: string
}

const Header:React.FC<IProps> = (props) => {
    const {message} = props;
    console.log(message);
    
    return (
        <div>
            <p>{message}</p>
            123
        </div>
    )
}
export default memo(Header);