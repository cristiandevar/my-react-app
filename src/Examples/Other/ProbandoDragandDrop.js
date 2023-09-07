
function DragDrop(){

    return (
        <div id="drop_zone" ondrop="dropHandler(event);">
            <p>Arrastra y suelta uno o más archivos a esta zona ...</p>
        </div>
    );
}

export default DragDrop;

