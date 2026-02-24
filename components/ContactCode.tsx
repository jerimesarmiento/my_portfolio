import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'jerimesarmiento.com',
    href: 'https://nitinranganath.com',
  },
  {
    social: 'email',
    link: 'jerimesarmiento162005@gmail.com',
    href: 'mailto:jerimesarmiento162005@gmail.com',
  },
  {
    social: 'github',
    link: 'jerimesarmiento',
    href: 'https://github.com/jerimesarmiento',
  },
  {
    social: 'linkedin',
    link: 'jerime-sarmiento',
    href: 'https://www.linkedin.com/in/jerime-sarmiento-3828473a2/',
  },
    {
    social: 'facebook',
    link: 'jerime-sarmiento',
    href: 'https://web.facebook.com/jerime.sarmiento.5',
  },
  {
    social: 'x',
    link: 'jerime_162005',
    href: 'https://x.com/jerime_162005',
  },
  {
    social: 'telegram',
    link: 'jerime162005',
    href: 'https://t.me/jerime162005',
  },
  {
    social: 'peerlist',
    link: 'jerime162005',
    href: 'https://peerlist.io/jerimesa162005',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
