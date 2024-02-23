import './contact.css'

export default function WriteUs() {
    const items = [
        { id: 1, city: 'NewYork', about: 'Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA.', text: 'Open: 9:30 am – 9:00 pm' },
        { id: 2, city: 'London', about: 'Add: S9 Heaven Stress, Beverly Hill, Melbourne, USA.', text: 'Open: 9:30 am – 9:00 pm' },
        { id: 3, city: 'Contacts', about: 'Email: admin@basictheme.com', text: 'Phone: (+100) 123 456 789' },
    ]
    return (
        <section id="write-us">
            <div className="container">
                <div className="row f-jCenter">
                    <div className="wrapper w48">
                        <div className="item">
                            <p>Contact us</p>
                            <h4>Please contact us quickly if you need help.</h4>
                        </div>
                        <div className="item">
                            {items.map(el => (
                                <div key={el.id} className="col">
                                    <span>{el.city}</span>
                                    <p>{el.about}</p>
                                    <p>{el.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="wrapper w48">
                        <p>Write to us</p>
                        <form>
                            <div>
                                <input type="text" placeholder="Name*" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email*" />
                            </div>
                            <div>
                                <textarea cols="20" rows="5" placeholder='Comments' />
                            </div>
                            <div>
                                <input type="submit" placeholder='Send' className='btn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}