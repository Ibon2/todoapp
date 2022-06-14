
function List() {
    const listTaks = [{title:"Task1",description:"Description1"},
            {title:"Task2",description:"Description2"}];//should be the call to backend
    console.log(listTaks)
    const listAll = () =>{
        return listTaks.map(
            (d) => <div key={d.title}>{d.title} {d.description}</div>)
    }
    return (
        <div>
            {listAll()}
        </div>
    );
}

export default List;