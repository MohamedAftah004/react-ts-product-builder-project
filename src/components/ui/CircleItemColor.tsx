interface IProps {
  color: string;
}

function CircleItemColor({color}: IProps) {
  return <div className={`w-5 h-5 ${color} rounded-full cursor-pointer`}></div>;
}

export default CircleItemColor;

// الاستخدام:
