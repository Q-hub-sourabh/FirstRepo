import logo from './logo.svg';
import './App.css';

function App() {

  // let list = [101,20,30,40,70,60,100,80,50,10]

  // const maxValue = Math.max(list);
  // console.log(maxValue);

//   let list = [10,20,30,40,50,60,70,80,90,100]
// selectedValue = 50;
// Find the position of selectedValue using for loop.
// output  will be = 5
// then u need to remove the value

  // const maxValue = list[0];

  // for(let i =1;i<list.length;i++){
  //   if(list[i] > maxValue){
  //     maxValue = list[i]
  //   }
  // }

  // console.log(maxValue)



  //   let list = [10,20,30,40,50,60,70,80,90,100]
// selectedValue = 50;
// Find the position of selectedValue using for loop.
// output  will be = 5
// then u need to remove the value

let list = [10,20,30,40,50,60,70,80,90,100];

for(let i=1; i<list.length;i++){
  if(list[i] === 50){
    console.log(i)
    list.splice(i,1);
    break;
  }
}

console.log(list)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
