import axios from 'axios';

const getLatestPost = (url) => {
  /*
    Does the URL have http/s?
    if (!url.match(/^https?:\/\//)) {
      url = `https://${url}`;
  }*/
  url = !url.match(/^https?:\/\//) ? `https://${url}` : url;

  /*
    Does the url have a trailing /
    if (!url.match(/\/$/)) {
      url = `${url}/`;
  }*/

  // Does the URL have a trailing /?
  url = !url.match(/\/$/) ? `${url}/` : url;

  console.log(`${url}wp/v2/posts`);

  return axios
    .get(`${url}wp-json/wp/v2/posts/?per_page=1`, { crossdomain: true })
    .then((res) => {
      const postData = res.data[0];

      return {
        postTitle: postData.title.rendered,
        postURL: postData.link,
        postExcerpt: postData.excerpt.rendered.replace(
          'Continue Reading',
          'continue...'
        ),
        postDate: postData.date,
        postAuthor: 'JESSEJBURTON'
      };
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export { getLatestPost };
