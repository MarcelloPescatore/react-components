import './PostCard.modules.css'

export default function PostCard() {

    const titlePost = "Titolo del post"
    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquid at itaque vitae sit! Reiciendis eum eligendi, amet accusamus asperiores repellendus ut dolores libero ratione, excepturi reprehenderit, quibusdam animi. Harum?"
    const testoButton = "leggi di più"

    return (

        <div className='box-card'>
            <div className="box-img">
                <span>600 x 400</span>
            </div>
            <div className="box-info">
                <h3>{titlePost}</h3>
                <p>{description}</p>
                <button>{testoButton.toUpperCase()}</button>
            </div>
        </div>

    )

}