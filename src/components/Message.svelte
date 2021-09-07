<script>
    export var message;
    export var sender;

    const messageClass = message.who === sender ? 'sent' : 'received';
    const avatar = `https://avatars.dicebear.com/api/initials/${message.who}.svg`;
    const time_sent = new Date(message.when);
</script>

<div class={`message ${messageClass}`}>
    <img src={avatar} alt="avatar" />
    <div class="message-text">
        <p>{message.what}</p>

        <time>{time_sent.toLocaleTimeString()}</time>
    </div>
</div>
