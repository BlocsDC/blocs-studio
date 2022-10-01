// Export pages to routes
export const HomePage = (req, res) => {    
    res.status(200).render('index', {title: 'Home'});
};

export const AboutPage = (req, res) => {
    res.status(200).render('about', {title: 'About'});
}

export const ResumePage = (req, res) => {
    res.status(200).render('resume', {title: 'Resume'})
}