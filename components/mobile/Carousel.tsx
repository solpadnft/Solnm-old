import {Image} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface Props {autoPlay: boolean;}
  export default function Slider(props: Props) {
    const { autoPlay } = props;
    if (autoPlay) {
      console.log(autoPlay);
  };    
const onChange = (index: number) => {
console.log(`Carousel changed to index ${index}`);
};
const onClickItem = (index: number) => {
console.log(`Clicked on item ${index}`);
};
const onClickThumb = (index: number) => {
console.log(`Clicked on thumb ${index}`);
};

return (
        <div > 
          <Carousel 
            autoPlay={true} 
            showArrows={false} 
            infiniteLoop={true}  
            showStatus={false} 
            showIndicators={true} 
            showThumbs={false} 
            onChange={onChange} 
            onClickItem={onClickItem} 
            onClickThumb={onClickThumb}
          >                
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/1.png" />}  
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/fam.jpg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/3k.jpeg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/pass.jpeg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/rich.jpeg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/swap.jpeg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/wl.jpeg" />}
            {<Image style={{ borderRadius: "10px", width: "300px", height: "200px"}} src="/images/4.png" />}

         
          </Carousel> 
        </div>
      );
  }
  