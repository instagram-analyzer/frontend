import React from "react";
import MaterialDatatable from "material-datatable";

const options = {
  filterType: "checkbox",
  rowsPerPage: 5
};

class DataTable extends React.Component {
  state = {
    data: [],
    columns: [
      {
        name: "Link",
        field: "link",
        options: {
          filter: true,
          sort: true,
          customBodyRender: value => {
            return(
              <a href={value.link} target="_blank" rel="noopener noreferrer">{value.link}</a>
            )
          }
        },
      },
      {
        name: "Likes",
        field: "likes",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Comments",
        field: "comments",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Views",
        field: "views",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Video",
        field: "video",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Engagement",
        field: "engagement",
        options: {
          filter: true,
          sort: true
        }
      }
    ]
  };

  componentDidMount = () => {
    // {
    //   likes: "Name",
    //   comments: "Title 1",
    //   views: "Location 1",
    //   video: 30,
    //   engagement: 10,
    //   link: "something"
    // }
    let data = [];
    this.props.posts.map(p => {
      data.push({
        likes: p.likes_count,
        comments: p.comments_count,
        views: p.view_count,
        video: p.is_video ? "YES" : "NO",
        engagement: p.engagment,
        link: `https://instagram.com/p/${p.shortcode}`
      });
    });
    this.setState({ data });
  };
  render() {
    const { data, columns } = this.state;
    return (
      <MaterialDatatable
        title={"Posts List"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default DataTable;
