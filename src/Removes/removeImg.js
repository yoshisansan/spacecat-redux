const remove = list => {

  const removeImgs = [
    "https://media2.giphy.com/media/l0HlBwaMKwzEhTYkw/giphy-downsized.gif",
    "https://media3.giphy.com/media/l0MYtF4MaHlhEL7SE/giphy-tumblr.gif",
    "https://media3.giphy.com/media/EwmemLDMpTXsQ/giphy-downsized.gif",
    "https://media1.giphy.com/media/l41lR5ubKJShtkGdy/giphy-downsized.gif",
    "https://media3.giphy.com/media/oRIDteeHx0EKc/giphy-tumblr.gif",
    "https://media2.giphy.com/media/zkMri4yiJ3Mdy/giphy-downsized.gif",
    "https://media0.giphy.com/media/12OQNpEK2wWVfa/giphy-downsized.gif",
    "https://media1.giphy.com/media/hpQwBtms5D8dy/giphy-downsized.gif",
    "https://media2.giphy.com/media/I8eorWE0QuYYU/giphy-downsized.gif",
    "https://media0.giphy.com/media/1yMfs1NsNIAItbpXzO/giphy.gif",
    "https://media1.giphy.com/media/apl3NlB6WU3xm/giphy-downsized.gif",
    "https://media1.giphy.com/media/3jAlmwsFKrrnq/giphy-downsized.gif",
    "https://media1.giphy.com/media/RbE9Wj1DX19hS/giphy.gif",
    "https://media1.giphy.com/media/7oQ30c54ssxsk/giphy-downsized.gif",
    "https://media0.giphy.com/media/sKuNA4J7OXr7W/giphy-downsized.gif",
    "https://media0.giphy.com/media/l2JHRoOcvuKUMSXGo/giphy.gif",
    "https://media3.giphy.com/media/xT0BKEksASgc4OJGxy/giphy-tumblr.gif",
    "https://media0.giphy.com/media/iaDA7cK3aNvOM/giphy-downsized.gif",
    "https://media3.giphy.com/media/26ybuLs1DPvugDQsw/giphy-downsized.gif",
    "https://media2.giphy.com/media/3o7WIskynGiaNFdpgQ/giphy-downsized.gif"
  ];

  for (let i = 0; i < removeImgs.length; i++) {
    list = list.filter(Item => Item !== removeImgs[i]);
  }

  return list;
};

export default remove;
