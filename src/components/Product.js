import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    Tbody,
    Tr,
    Td,
  } from "@chakra-ui/react"

export default class Product extends Component {
  render() {
    const { price, quantity, title, action } = this.props
    return (
      <div style={{display: 'flex', textAlign:'center', top: '50%', width: '20%', margin: 'auto', position: 'relative'}}>
        <Table variant="striped" colorScheme="teal">
            <Tbody>
                <Tr>
                <Td> {title} - &#36;{price}</Td>
                <Td>{quantity ? `x ${quantity}` : null} </Td>
                </Tr>
            </Tbody>
        </Table>
        <div style={{marginLeft: '12px'}}>
        {action}
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  action: PropTypes.node,
}
