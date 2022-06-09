

function PersonCard( {person} ){


    const isAvailable = (
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#4CAF50" cx="24" cy="24" r="18"/><path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm8.28 9.698L23.723 29.81c-.424.5-1.17.552-1.66.125l-6.221-5.445a1.166 1.166 0 111.537-1.756l5.329 4.664 7.79-9.205a1.166 1.166 0 111.78 1.506z" fill="#FFF" fillRule="nonzero"/></g></svg>
    )

    const busy = (
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF5722" cx="24" cy="24" r="18"/><path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm9.18 16.554H14.82a2.554 2.554 0 110-5.108h18.36a2.554 2.554 0 010 5.108z" fill="#FFF" fillRule="nonzero"/></g></svg>
    )

    return(
        <div className="person-card">
            <div className="imageWrapper">
                <img src={person.image} alt="person_image" />
                <div className="svgWrapper">
                    {person.available 
                        ?  isAvailable
                        :  busy
                    }
                </div>
            </div>
            <div className="person-info">
                <h4>{person.firstName} {person.lastName}</h4>
                <p className="location">{person.location}</p>
            </div>
            <div className="person-contacts">
                <p className="phone">phone: {person.phone}</p>
                <p className="email">email: {person.email}</p>
            </div>
        </div>

    )
}

export default PersonCard;

/*
    const isAvailable = (
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#4CAF50" cx="24" cy="24" r="18"/><path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm8.28 9.698L23.723 29.81c-.424.5-1.17.552-1.66.125l-6.221-5.445a1.166 1.166 0 111.537-1.756l5.329 4.664 7.79-9.205a1.166 1.166 0 111.78 1.506z" fill="#FFF" fill-rule="nonzero"/></g></svg>
    )

    const busy = (
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF5722" cx="24" cy="24" r="18"/><path d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm9.18 16.554H14.82a2.554 2.554 0 110-5.108h18.36a2.554 2.554 0 010 5.108z" fill="#FFF" fill-rule="nonzero"/></g></svg>
    )

    return(
        <Card className="person-card">
            <Card.Img variant="top" src={person.image} alt="person_image" />
            <Card.ImgOverlay />
            <Card.Body>
                {person.available 
                    ?  isAvailable
                    :  busy
                }
                <Card.Title>{person.firstName} {person.lastName}</Card.Title>
                <Card.Text>
                    <p className="location">{person.location}</p>
                    <div className="person-contacts">
                    <p className="phone">phone: {person.phone}</p>
                    <p className="email">email: {person.email}</p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
*/