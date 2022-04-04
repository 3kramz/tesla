import React from 'react';
import './blog.css'

const blog = () => {
    return (
        <div className="blogs">
            <h4 className='ques'>  # What is Symantic tag?</h4>
            <p className='ans'>=> HTML Symantic tag are the tags which give us the informations about its content to browser and how they look  like on the page. We should use it for proper SEO. Each of them has individiual meanings. It is used according to their intendent purpose. It requires the seperastion of content and presentation </p>
            <br/>
            <h4 className='ques'>  # What is Context API?</h4>
            <p className='ans'>=> React is  component based library. Sometimes it has multilabel components. Sometimes we need to pass data from parent to child. Tere is two way to pass data from parent to child. One is props drilling and anoother method is Context API. Props driling is more complecated if its tree is large. But By context API we can pass data easily without props drilling.</p>
        </div>
    );
};

export default blog;