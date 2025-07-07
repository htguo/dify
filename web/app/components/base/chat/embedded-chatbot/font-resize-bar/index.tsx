import React from "react";
import { HiOutlineMinusCircle,HiOutlinePlusCircle, HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import Button from "../../../button";

const plusFontSize = () => {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  if(fontSize < 30) {
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  }
}
const minusFontSize = () => {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  if (fontSize > 12) {
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  }
}


const FontResizeBar= ({}) => {
  return (
    <div className="flex items-center gap-2" style={{textAlign:'center'}}>
      <div style={{width:'100%', position: 'relative', padding: '8px 10px 8px 0', textAlign: 'right'}}>
        <Button onClick={minusFontSize} styleCss={{fontWeight: 400, fontSize: '26px', width:'24px',height:'24px', borderRadius:'12px', border:0, padding:'0 0 2px 0', backgroundColor: '#458DF1', boxShadow: 'none', color:'#FFFFFF'}}>
          -
        </Button>
        <span style={{fontSize:'20px', display: 'inline-block', margin: '0 8px' , color: '#0F1727'}}>字号</span>
        <Button onClick={plusFontSize}  styleCss={{fontWeight: 400, fontSize: '26px', width:'24px',height:'24px', borderRadius:'12px', border:0, padding:'0 0 2px 0', backgroundColor: '#458DF1', boxShadow: 'none', color:'#FFFFFF'}}>
          +
        </Button>

      </div>
    </div>
  )
}

export default React.memo(FontResizeBar)
