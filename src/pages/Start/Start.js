import React, { Component } from 'react'
import { map } from 'lodash'

import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import request from 'request'

require('./start.scss')

class Start extends Component {

  constructor (props) {
    super(props)
    this.data = {}
    this.data.email = 'mailto:hi@manuelvilling.de'
    this.data.github = 'https://github.com/theotow/'
    this.data.skills = ['html5', 'css5', 'angularjs', 'react', 'wordpress', 'linux', 'aws', 'seo', 'hapi', 'loopback', 'nodejs']
    this.data.projects = [{
      name: 'gitmonitor',
      url: 'https://github.com/theotow/gitmonitor-ios'
    }, {
      name: 'need.io',
      url: 'https://github.com/theotow/need.io'
    }, {
      name: 'costring.co',
      url: 'https://costring.co'
    }]
    this.state = { posts: [] }
    this.data.customers = ['bottlesxo']
    this.feedUrl = 'https://manuelvilling.de/rss?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40theotow%3Fformat%3Djson'
    this.customers = this.customers.bind(this)
    this.projects = this.projects.bind(this)
    this.skills = this.skills.bind(this)
  }

  componentDidMount () {
    const that = this
    request(this.feedUrl, {
      withCredentials: false
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({
          posts: JSON.parse(body).items
        })
      }
    })
  }

  skills () {
    return map(this.data.skills, (skill, key) => {
      if (!skill) return null
      return (
        <div key={key} className={'start__list-item'}>
          <Button text={skill} />
        </div>
      )
    })
  }

  customers () {
    return map(this.data.customers, (customer, key) => {
      return (
        <Image key={key} image={customer} />
      )
    })
  }

  projects () {
    return map(this.data.projects, (project, key) => {
      if (!project) return null
      return (
        <a href={project.url} key={key} className={'start__list-item'}>
          <Button text={project.name} />
        </a>
      )
    })
  }

  fixDate (date) {
    const fixedDate = date.split(' ')[0]
    return (
      <span>{fixedDate}</span>
    )
  }

  posts (postarray) {
    return map(this.state.posts, (post) => {
      return (
        <a href={post.link} target='_blank' key={post.guid} className={'start__blogpost'}>
          <div className={'start__blogpost-title'}>{post.title}</div>
          <div className={'start__blogpost-date'}>{this.fixDate(post.pubDate)}</div>
        </a>
      )
    })
  }

  render () {
    return (
      <div>
        <a href={this.data.email} className={'start__contact start__contact--left'}>
          <Button text={'Contact'} />
        </a>

        <a href={this.data.email} className={'start__contact start__contact--right'}>
          <Button text={'Hire me'} />
        </a>
        <div className={'row'}>
          <div className={'col-lg-12'}>
            <div className={'start__article start__article--first start__article--blue'}>
              <Header />
            </div>
            <div className={'start__article start__article--blue'}>
              <h2 className={'h2 start__h2'}>Skills</h2>
              <div className={'start__list'}>
                {this.skills()}
              </div>
            </div>
            <div className={'start__article start__article--white'}>
              <h2 className={'h2 start__h2'}>Customers</h2>
              <div className={'start__imagelist'}>
                {this.customers()}
                <div className={'start__info'}>
                  + various Agencies i can not name here
                </div>
              </div>
            </div>
            <div className={'start__article start__article--blue'}>
              <h2 className={'h2 start__h2'}>Own Projects</h2>
              <div className={'start__list'}>
                {this.projects()}
                <div className={'start__info'}>
                  <a href={this.data.github}>more on my Github</a>
                </div>
              </div>
            </div>
            {this.state.posts.length > 0 && <div className={'start__article start__article--blue'}>
              <h2 className={'h2 start__h2'}>Latest Blogposts</h2>
              <div className={'start__list'}>
                {this.posts()}
              </div>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default Start
