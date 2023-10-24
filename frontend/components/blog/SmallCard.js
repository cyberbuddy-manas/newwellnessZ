import styles from "../../styles/blogposts.module.css"
import { format } from 'date-fns';

const SmallCard = ({ blog }) => {
 
    const date = new Date(blog.date);
    const formattedDate = format(date, 'dd MMM, yyyy');
    return (
        < >
         <a href={`/blogs/${blog.slug}`} className={styles.relatedtitle}>
            <section className={styles.resizeparent}>
                <img className={styles.resizeimgrelated}  src={blog.photo} alt={blog.title} />   
            </section>

            <section className={styles.givetitlemar}> 
                 {blog.title} 
            </section>
            </a>

            <section className={styles.dateauth}>
                {formattedDate} &nbsp; by &nbsp;
                {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                    <a href={`/about`} className={styles.author}>
                        {blog.postedBy.name}
                    </a>
                ) : (
                    <span></span>
                )}
            </section>

            <br/>
            
        </>
        
    );
};

export default SmallCard;