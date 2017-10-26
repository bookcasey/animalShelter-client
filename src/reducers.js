import * as actions from './actions';

const initialState = {
  cat: {
       imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
       name: "Fluffy",
       gender: 'Female',
       age: "2 yrs",
       breed: "Bengal",
       story: "Thrown on the street"
  },
  dog: {
     imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
     name: "Spot",
     gender: 'Male',
     age: "3 yrs",
     breed: "Soft Coated Wheaten Terrier",
     story: "Found in carboard box"
   }
};

export const reducer = (state=initialState, action) => {
    return state;
};
