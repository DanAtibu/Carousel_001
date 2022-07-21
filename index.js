
window.ondrop = function(e) { e.preventDefault(); return false };

const data = [
    {
        "id": 11,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/pexels-pixabay-534151.jpg"
    },
    {
        "id": 10,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/pexels-curtis-adams-3288102.jpg"
    },
    {
        "id": 9,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/luxury_house_2-wallpaper-1920x1200.jpeg"
    },
    {
        "id": 8,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/pexels-curtis-adams-3288104.jpg"
    },
    {
        "id": 7,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/pexels-curtis-adams-3288100.jpg"
    },
    {
        "id": 6,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/GettyImages-147308611-scaled-e1615494930748.jpeg"
    },
    {
        "id": 5,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/off-market-real-estate-compressor.png"
    },
    {
        "id": 4,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/4be21f859e6e5537494fe4cccdaee4c6l-m2127431990od-w480_h360_x2.jpeg"
    },
    {
        "id": 3,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/various-home-house-houses-p.jpeg"
    },
    {
        "id": 2,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/Capisco-Indoor-Staircase-Backdrop-Photography-Luxury-House-Wedding-Photo-Studio-Background-Vinyl-Fondos-De-Estudio-Fotografia.jpeg"
    },
    {
        "id": 1,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-14/various-home-house-houses.jpeg"
    },
    {
        "id": 15,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-18/EUROPEAN-COUNTRYSIDE-MF-2531-FRONT-VIEW-scaled.jpeg"
    },
    {
        "id": 14,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-18/photo-1600596542815-ffad4c1539a9.jpeg"
    },
    {
        "id": 13,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-18/ff1cb21b02c066d2395504f7d0640f06.jpeg"
    },
    {
        "id": 12,
        "Url": "https://d29cc8o2s6hm2a.cloudfront.net/Madoshome/b9a31f59-7e6c-43a4-bd79-e8256777b0e0/Uploaded-houses/2022-7-18/photo-1580587771525-78b9dba3b914.jpeg"
    }
];


const Separator001 = ({ margin = ".5rem" }) => <div className="Separator001" style={{ marginRight: margin }}></div>


function Button({ type = "primary", text = "Primary", icon = "fas fa-download", onClick = async () => { } }) {

    const [load, setLoad_] = React.useState();
    const setLoad = () => setLoad_(state => !state);

    return <button className={`d-button ${type} ${load && 'd-button-load'}`} onClick={(e) => {
        e.stopPropagation();
        if (!load) {
            setLoad();
            onClick().finally(() => setLoad());
            // setTimeout(() => {
            // }, 3000);
        };
    }}>{text} <i className={icon}></i> </button>
}


function AddFile({ pickerImage = () => { } }) {

    const [ load, setLoad ] = React.useState();
    const handlerLoad = () => setDrag(state => !state);

    const [ drag, setDrag ] = React.useState();
    const handlerDrag = () => setDrag(state => !state);

    const inputRef = React.useRef();

    return <div
        className={`add-file-component ${load && 'load'}`}
        
        onClick={(e) => {
            e.stopPropagation();
            inputRef.current.click();
        }}
        
        onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(e.dataTransfer.files);
        }}
 
        // onDragEnter = {handlerDrag}

        // onDragLeave = {handlerDrag}
        >
        <div className="carousel_flex">
            <input type="file" style={{ display: "none" }} ref={inputRef} onChange={(e) => {
                handlerLoad();
                pickerImage(e).finally(() => handlerLoad());
            }} />
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Add An Image</p>
        </div>
    </div>;
};


const EventList = {
    SELECT_IMAGE: "SELECT_IMAGE",
    ADD_IMAGE: "ADD_IMAGE",
    REMOVE_IMAGE: "REMOVE_IMAGE",
    NEXT_IMAGE: "NEXT_IMAGE"
}


function Reducer(state, action) {
    switch (action.type) {
        case EventList.SELECT_IMAGE:
            return { ...state, currentImage: action.payload }


        case EventList.ADD_IMAGE:
            return { ...state, List: [...state.List, action.payload] }


        case EventList.REMOVE_IMAGE:
            return {
                ...state, List: state.List.filter((_, index) => {
                    let response = _.id !== action.payload;
                    if (!response) {
                        let right = state.List[index + 1];
                        let left = state.List[index - 1];
                        if (right) state.currentImage = right;
                        if (left, !right) state.currentImage = left;
                        if (!right, !left) state.currentImage = { Url: "https://www.och-lco.ca/wp-content/uploads/2015/07/unavailable-image.jpg" };
                    };
                    return response;
                })
            }


        case EventList.NEXT_IMAGE:
            let Item = state.List.find((_, index) => {
                if (_.id === state.currentImage.id) {
                    return state.List[index + 1]
                };
            });
            return { ...state, currentImage: Item }


        default:
            return state;
    }
}


function Carousel({ data = [], height, min_length = 3, addImage, deleteImage, addImageError, deleteImageError }) {
    const gapArea = 150;
    const InitData = { List: data, currentImage: data[0] || {} };
    const selectFunction = (payload) => dispatch({ type: EventList.SELECT_IMAGE, payload })

    const downloadFunction = async () => fetch(currentImage.Url).then(r => r.blob()).then(data_blob => {
            const imageURL = URL.createObjectURL(data_blob);

            const link = document.createElement('a');
            link.href = imageURL;
            link.download = currentImage.Url.split('/').pop();
            link.click();
    });

    const ScrollListRef = React.useRef();
    const MainImageRef = React.useRef();

    const [{ List, currentImage }, dispatch] = React.useReducer(Reducer, InitData);

    return <div id="carousel001">
        <div id="carousel001_top_party">
            <img id="carousel001_main_image" style={{ height }} ref={MainImageRef} src={currentImage.Url} onClick={(e) => {
                e.stopPropagation();
                window.open(currentImage.Url, '_blank');
            }} />
            <div id="carousel001_action" className="carousel_flex">
                <Button text="Save Image" onClick={downloadFunction} />
                <Separator001 />
                {
                    deleteImage && <Button type="danger" icon="fas fa-times" text="Delete" onClick={async () => {
                        return deleteImage(currentImage.id).then(ok => {
                            if (ok) {
                                (List.length > min_length) && dispatch({ type: EventList.REMOVE_IMAGE, payload: currentImage.id })
                            }
                        })
                    }} />
                }
            </div>
        </div>

        <div id="carousel001_bottom_party" style={{
            position: "relative"
        }} className="carousel_flex">
            <i className="fas-croller fas fa-arrow-left" onClick={(e) => {
                e.stopPropagation();
                ScrollListRef.current.scrollLeft -= gapArea;
            }}>
            </i>
            <div id="carousel001_image_list" className="carousel_flex" style={{ "scrollBehavior": "smooth" }} ref={ScrollListRef}>
                {
                    !addImage && <AddFile pickerImage={async ({ target }) => addImage(target.files).then(payload => payload && dispatch({ type: EventList.ADD_IMAGE, payload }))} />
                }
                {
                    List.map(img => <img className="carousel001_img"
                        key={img.id}
                        src={img.Url}
                        onClick={(e) => {
                            e.stopPropagation();
                            selectFunction(img);
                        }}
                    />)
                }
            </div>
            <i className="fas-croller fas fa-arrow-right"
                onClick={(e) => {
                    e.stopPropagation();
                    ScrollListRef.current.scrollLeft += gapArea;
                }}>
            </i>
        </div>
    </div>;
};




ReactDOM.render(<div>
    <Carousel data={data} height="30rem" deleteImage={() => { }} />
    {/* <Carousel data={data} height="30rem" /> */}
</div>, document.getElementById("root"));

