import styles from './FormattedTime.module.scss';



const FormattedTime = (props) => {

  const pad0 = (value) => {
    if (value>9){
      return value;
    }
    else {
      return '0' + value;
    }
  }

   const formatTime = millseconds => {
     return (
      <div className={styles.timer}>
      <span className="digits">
        {pad0(Math.floor(millseconds / 6000))};
      </span>
      <span className="digits">
        {pad0(Math.floor((millseconds % 6000)/100))}:
      </span>
      <span className="digits mili-sec">
        {pad0((millseconds % 100))}
      </span>
    </div>
     );
   };

  return (
    <div className={styles.component}>
       {formatTime(props.time)}
    </div>
  );

};

export default FormattedTime;