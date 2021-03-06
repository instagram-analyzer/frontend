import React from "react";
import MaterialDatatable from "material-datatable";
import NumberFormat from "react-number-format";
import moment from "moment";

import { EnagagementLabel } from './tableStyles.js';

class DataTable extends React.Component {
  state = {
    data: [],
    options: {
      filterType: "checkbox",
      rowsPerPage: this.props.rows
    },
    columns: [
      {
        name: "Posted At",
        field: "posted_at",
        options: {
          filter: true,
          sort: true,
          customSortValue: value => value.posted_at,
          customBodyRender: value => {
            return(
              <h2>{moment.unix(value.posted_at).format('MM/DD/YYYY h:mmA')}</h2>
            )
          }
        },
      },
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
          sort: true,
          customSortValue: value => value.likes,
          customBodyRender: value => {
            return(
              <NumberFormat value={value.likes} displayType={"text"} thousandSeparator />
            )
          }
        }
      },
      {
        name: "Comments",
        field: "comments",
        options: {
          filter: true,
          sort: true,
          customSortValue: value => value.comments,
          customBodyRender: value => {
            return(
              <NumberFormat value={value.comments} displayType={"text"} thousandSeparator />
            )
          }
        }
      },
      {
        name: "Views",
        field: "views",
        options: {
          filter: true,
          sort: true,
          customSortValue: value => value.views,
          customBodyRender: value => {
            return(
              <NumberFormat value={value.views} displayType={"text"} thousandSeparator />
            )
          }
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
          sort: true,
          customSortValue: value => value.engagement,
          customBodyRender: value => {
            return(
              <EnagagementLabel 
                bg={
                  value.engagement > 3 ? 'green' 
                  : value.engagement < 1 ? 'red' :
                  'orange' 
                }
              >
              {value.engagement}%
              </EnagagementLabel>
            )
          }
        }
      }
    ]
  };

  componentDidMount = () => {
    let data = [];
    this.props.posts.map(p => {
      data.push({
        posted_at: p.taken_at_timestamp,
        likes: p.likes_count,
        comments: p.comments_count,
        views: p.view_count || 0,
        video: p.is_video ? "YES" : "NO",
        engagement: p.engagment,
        link: `https://instagram.com/p/${p.shortcode}`
      });
    });
    this.setState({ data });
  };
  render() {
    const { data, columns, options } = this.state;
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
