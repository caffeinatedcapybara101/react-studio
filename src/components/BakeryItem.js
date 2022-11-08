// TODO: create a component that displays a single bakery item
function createBakeryItem(props) {
    return (
        <div>
            <img src={props.image} class="bakery-image" />
            <div class="item-name">{props.name}</div>
            <p class="item-description">{props.description}</p>
            <div class="item-price">{props.price}</div>
        </div>
    );
}

export default createBakeryItem;