

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerLinks}>
        <a href="/" style={styles.link}>Terms & Conditions</a>
        <a href="/" style={styles.link}>Privacy Policy</a>
        <a href="/" style={styles.link}>Contact Us</a>
      </div>
      <p style={styles.footerText}>&copy; {new Date().getFullYear()} Dimitar Krastev. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop:'20px'
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: '14px',
  },
};

export default Footer;
