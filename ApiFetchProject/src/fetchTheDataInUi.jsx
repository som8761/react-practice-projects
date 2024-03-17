import React from 'react'

const FetchTheDataInUi = ({user}) => {
    return (
        <div className="main">
    
          {user.map((userItem) => {
    
            const {id,image,title,description} = userItem; // this is called object destructuring...
    
            return (
              <div className="container" key={id}>
                <img src={image} alt="image" />
                <div className="text">
                  <h4>{title}</h4>
                  <h5>{description.slice(0, 22)}</h5>
                </div>
              </div>
            );
          })}
        </div>
    
        // upore oi key ta dewa mandatory.
        /*important
        upore map use korle ami always second bracket{} ditam.kintu akhn seta amake return korchi bole () first bracket dite hobe.
        */
      );
  
}

export default FetchTheDataInUi