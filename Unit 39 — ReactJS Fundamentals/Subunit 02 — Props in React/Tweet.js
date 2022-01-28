let Tweet = (props) => {
  const { username, name, date, message } = props;
  return (
    <p>
      {username} ({name}) tweeted {message} on {date}
    </p>
  );
}
