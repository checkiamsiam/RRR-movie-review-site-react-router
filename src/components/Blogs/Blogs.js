import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className="blogs grid md:grid-cols-2 gap-3 p-5">
        <div className="que1 shadow-2xl p-10">
          <h1 className='font-semibold text-2xl'>What is Context Api?</h1>
          <p className='font-serif p-5 text-lg text-left'><span className='text-fuchsia-500 text-2xl'>Ans:</span> context api is a react method. we can send data by props in all level of component by context api.we can think - not only parent to child but also child to parent we can send data via props by using context api.</p>
        </div>
        <div className="que2 shadow-2xl p-10">
          <h1 className='font-semibold text-2xl'>What is symantic Tag?</h1>
          <p className='font-serif p-5 text-lg text-left'><span className='text-fuchsia-500 text-2xl'>Ans:</span> Symantic tag is a new thing in old developer . in html latest version they make some new tag that are very easyly to understand what should be write in this tag. example header , footer , main , section , aside thats all are symentic tags.</p>
        </div>
        <div className="que3 shadow-2xl p-10">
          <h1 className='font-semibold text-2xl'>Difference between block , inline and inline-block element?</h1>
          <p className='font-serif p-5 text-lg text-left'><span className='text-fuchsia-500 text-2xl'>Ans:</span> block element are block all space in their line but inline element block only this area their have content of this element and inline block element is a inline element but it behave like block element bcz inline element sometimes Adulterated in margin and padding using inline-block value this problem can be easyly solve. </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;