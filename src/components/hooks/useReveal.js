import { useEffect, useRef, useState } from "react";

const useReveal = () => {

  const ref = useRef(null);

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const element = ref.current;

    if (!element) return;


    const observer = new IntersectionObserver(
        (entries)=>{

        if(entries[0].isIntersecting){

        setVisible(true);

        }

        },
        {
        threshold:0.25
        }
        );


    observer.observe(element);


    return () => {

      observer.disconnect();

    };


  }, []);



  return [ref, visible];

};


export default useReveal;