const StoreComment = (id, newComment) => {
     const findComment = JSON.parse(localStorage.getItem(id));
     if(findComment){
         const updatecomment = JSON.stringify([...findComment,newComment]);
         localStorage.setItem(id, updatecomment);
     }else{
         localStorage.setItem(id, JSON.stringify([newComment]));
     };
};

export default StoreComment;