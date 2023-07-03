import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
        'Bearer qo4_p3qXitt09hE7IWPtTST25PBLBoqx5RGUM57gRbi2OmUdr-7ynbnRc8Pqq0tw0pxhZ8SCTSGAf49e04bGugwSvBqQNfREsHz9X49vi1a3EtLB-6BfxkqYttmMZHYx'
    }
});

