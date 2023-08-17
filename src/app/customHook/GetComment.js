const GetComment = (id) => {
    const finddata = JSON.parse(localStorage.getItem(id));
    if(finddata){
        return finddata;
    }else{
        return [];
    }
};

export default GetComment;